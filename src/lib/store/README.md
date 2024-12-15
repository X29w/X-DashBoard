# zh-CN

- 这是放置全局状态管理的文件夹，使用的是 redux-toolkit。
- 在`slices`文件夹下存放所有的 slice 文件，每个文件包含一个 Redux reducer 和一系列的 action creator。
- 每个文件必须暴露出`Selectors`，以便于其他组件可以方便地获取状态信息。如`export const selectCounter = (state: RootState) => state.counter.value;`
- 每个文件必须暴露出对应的`reducer`,`action`,如

```ts
const counterSliceReducer = counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSliceReducer;
```

# en-US

- This folder is used to manage the global state of the project, using redux-toolkit.
- In the `slices` folder, there are all the slice files, which contain a Redux reducer and a series of action creators.
- Each file must export `Selectors`, so that other components can easily obtain state information. For example, `export const selectCounter = (state: RootState) => state.counter.value;`
- Each file must also export the corresponding `reducer`, `action`, such as:

```ts
const counterSliceReducer = counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSliceReducer;
```

#日本語

- このフォルダは、redux-toolkit を使用して、プロジェクトのグローバル状態を管理するために使用されます。
- `slices`フォルダには、Redux reducer とアクションクリエータの系列を含むすべてのスライスファイルがあります。
- 各ファイルは、状態情報を取得するための`Selectors`をエクスポートする必要があります。たとえば、`export const selectCounter = (state: RootState) => state.counter.value;`
- 各ファイルは、対応する`reducer`と`action`もエクスポートする必要があります。たとえば、

```ts
const counterSliceReducer = counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSliceReducer;
```
