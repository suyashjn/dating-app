using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _dataContext;
        private readonly ITokenService _tokenService;

        public AccountController(DataContext dataContext, ITokenService tokenService)
        {
            _dataContext = dataContext ?? throw new ArgumentNullException(nameof(dataContext));
            _tokenService = tokenService ?? throw new ArgumentNullException(nameof(tokenService));
        }

        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
        {
            if (await UserExists(registerDto.UserName)) return BadRequest("Username is taken!");

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            await _dataContext.AddAsync(user);
            await _dataContext.SaveChangesAsync();

            return CreatedAtAction(
                "Register",
                new UserDto
                {
                    Username = user.UserName,
                    Token = _tokenService.CreateToken(user)
                }
            );
        }

        [HttpPost("login")]
        public async Task<ActionResult<AppUser>> Login(LoginDto loginDto)
        {
            var user = await _dataContext.Users.FirstOrDefaultAsync(
                x => x.UserName == loginDto.UserName);

            if (user == null) return Unauthorized("Invalid username or password");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            if (!user.PasswordHash.SequenceEqual(computedHash))
            {
                return Unauthorized("Invalid username or password");
            }
            return Ok(new UserDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            });
        }

        private async Task<bool> UserExists(string userName)
        {
            return await _dataContext.Users.AnyAsync(x => x.UserName == userName.ToLower());
        }
    }
}
