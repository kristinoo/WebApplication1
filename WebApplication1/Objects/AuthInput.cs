namespace WebApp.Objects
{
    /// <summary>
    /// Данные для аутентификации
    /// </summary>
    public class AuthInput
    {
        /// <summary>
        /// Логин
        /// </summary>
        public string login { get; set; } = string.Empty;

        /// <summary>
        /// Пароль
        /// </summary>
        public string password { get; set; } = string.Empty;
    }
}
