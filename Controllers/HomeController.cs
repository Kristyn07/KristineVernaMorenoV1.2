using Microsoft.AspNetCore.Mvc;

namespace KristineVernaMorenoV1._2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
