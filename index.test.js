const main = require('./main.js')

const spyLog = jest.spyOn(console, 'log')
spyLog.mockImplementation(x => x)

test("メッセージの表示の数が正しいこと", () => {
  main.main()
  expect(console.log).toHaveBeenCalledTimes(2)
})

test("一つ目のメッセージが正しく表示されていること", () => {
  main.main()
  expect(spyLog.mock.calls[0][0]).toBe('バクフーンたくが初めて作ったOSSバク！♩')
})

test("二つ目のメッセージが正しく表示されていること", () => {
  main.main()
  expect(spyLog.mock.calls[1][0]).toBe('これからいろんなOSS開発していこうと思っているバク！頑張るバクよー！♩')
})