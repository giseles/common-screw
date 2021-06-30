import { debounce } from '../debounce';
jest.useFakeTimers()

test('debounce 默认时间', () => {
    const func = jest.fn()
    const debounced = debounce(func);
    debounced()
    debounced()
    jest.runAllTimers()
    expect(func).toHaveBeenCalledTimes(1)
})


test('debounce twice', () => {
    const func = jest.fn()
    const debounced = debounce(func, 1000);
    debounced()
    debounced()
    setTimeout(debounced, 20)
    setTimeout(debounced, 2000)
    jest.runAllTimers()
    expect(func).toHaveBeenCalledTimes(2)
})