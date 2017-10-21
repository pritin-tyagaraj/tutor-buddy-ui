import technicalActionCreators from './technical-action-creators'

describe('Redux Action Creators', () => {
  describe('technical', () => {
    it('toggleAppDrawer()', () => {
      expect(technicalActionCreators.toggleAppDrawer().type).toBe('TOGGLE_APP_DRAWER')
    })
  })
})
