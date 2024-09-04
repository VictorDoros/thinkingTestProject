import User from "../../models/user"
import Environment from "../../models/environment"
import RegisterUser from "../../pages/registerUser"
import APIRequests from "../../pages/apiRequests"

describe("Register user", { tags: ["@api", "@userRegisterAPI"] }, () => {
  let user: User
  let env: Environment
  let registerUser: RegisterUser
  let apiRequest: APIRequests

  beforeEach(() => {
    user = new User()
    registerUser = new RegisterUser()
    env = new Environment()
    apiRequest = new APIRequests()
  })

  it("Register user using API", () => {
    apiRequest.registerUsingAPI(user, env)
  })
})
