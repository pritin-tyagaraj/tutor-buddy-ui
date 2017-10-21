import routingActionCreators from './routing-action-creators'

describe('Redux Action Creators', () => {
  describe('routing', () => {
    it('navToDashboard()', () => {
      expect(routingActionCreators.navToDashboard().type).toBe('NAV_TO_DASHBOARD')
    })
    it('navToBatches()', () => {
      expect(routingActionCreators.navToBatches().type).toBe('NAV_TO_BATCHES')
    })
  })
})
