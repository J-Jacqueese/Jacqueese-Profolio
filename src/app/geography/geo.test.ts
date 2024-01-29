import { describe, expect, test } from "@jest/globals";
function timerGame(callback?: () => any) {
	console.log("Ready....go!");
	setTimeout(() => {
		console.log("Time's up -- stop!");
		callback && callback();
	}, 1000);
}
jest.useFakeTimers();

test("waits 1 second before ending the game", () => {
	timerGame();

	// 验证定时器函数被调用的次数
	expect(setTimeout).toHaveBeenCalledTimes(1);

	// // 验证定时器的时间是1s
	// expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
