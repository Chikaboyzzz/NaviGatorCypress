import {BaseController} from "../API-core/Controllers/BaseController"

describe('Login API suite:', () => {
  const baseController = new BaseController()
  before( async () => {
    await baseController.authorization()
  })

  it('should do login successfully', async () => {
    let coupons = await baseController.getCouponsList()
    cy.log(coupons.Items);
  })
})
