using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly DataContext _dataContext;

        public UsersController(DataContext dataContext)
        {
            _dataContext = dataContext ?? throw new ArgumentNullException(nameof(dataContext));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInfoDto>>> GetUsers()
        {
            var users = await _dataContext.Users.Select(x => MapToUserInfo(x)).ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserInfoDto>> GetUser(int id)
        {
            var user = await _dataContext.Users.FindAsync(id);
            if (user == null) return NotFound();
            return Ok(MapToUserInfo(user));
        }

        private static UserInfoDto MapToUserInfo(AppUser user)
        {
            return new UserInfoDto
            {
                Id = user.Id,
                Username = user.UserName
            };
        }
    }
}
