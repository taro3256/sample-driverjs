const driver = new Driver();

driver.defineSteps([
	{
		element: '#content',
		popover: {
			title: 'Content',
			description: 'メインコンテンツです',
			doneBtnText: '完了',
			closeBtnText: '閉じる',
			nextBtnText: '進む',
			prevBtnText: '戻る',
		}
	},
	{
		element: '#neko',
		popover: {
			title: 'Neko',
			description: '猫猫猫です',
			doneBtnText: '完了',
			closeBtnText: '閉じる',
			nextBtnText: '進む',
			prevBtnText: '戻る',
		}
	},
	{
		element: '#text',
		popover: {
			title: 'Text',
			description: '文章です',
			doneBtnText: '完了',
			closeBtnText: '閉じる',
			nextBtnText: '進む',
			prevBtnText: '戻る',
		}
    },
    {
		element: '#footer',
		popover: {
			title: 'test',
			description: 'HTMLも入れ込めます<hr>へ〜〜すごい！<button onclick="sugoi();">すごいと思った時に押すボタン</button>',
			doneBtnText: '完了',
			closeBtnText: '閉じる',
			nextBtnText: '進む',
			prevBtnText: '戻る',
		}
	}
]);

driver.start();

const sugoi = () => {
    alert('すごい！');
}