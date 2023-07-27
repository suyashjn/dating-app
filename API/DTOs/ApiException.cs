namespace API.DTOs
{
    public class ApiException
    {
        public ApiException(int statusCode, string message, string details)
        {
            StatusCode = statusCode;
            Message = message ?? throw new ArgumentNullException(nameof(message));
            Details = details ?? throw new ArgumentNullException(nameof(details));
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}
