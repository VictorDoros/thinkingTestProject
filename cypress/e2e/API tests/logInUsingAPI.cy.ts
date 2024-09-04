import User from "../../models/user"
import Environment from "../../models/environment"
import LogInLogOutPage from "../../pages/loginLogoutPage"

describe("Log in using API", { tags: ["@api", "@login"] }, () => {
  let loginLogoutPage: LogInLogOutPage
  let env: Environment
  let user: User

  beforeEach(() => {
    loginLogoutPage = new LogInLogOutPage()
    env = new Environment()
    user = new User()
  })

  it("Log in using API", () => {
    loginLogoutPage.logInUsingAPI(user, env)
  })

})
