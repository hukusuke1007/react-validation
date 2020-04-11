/** ページ間、コンポーネント間で渡すPropsType */

export type PageType = {
  id: string,
  age: number,
}

export type InputType = {
  text: string
  onClear: () => void,
}