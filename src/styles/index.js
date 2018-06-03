import styled from 'styled-components'

export const AppWrapper = styled.div`
  font-family: 'Source Code Pro', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    flex-wrap: wrap;
    width: 950px;
    justify-content: space-between;
  }
`

export const OptionsWrapper = styled.div`
  flex: 1;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 1px 1px grey;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-sizing: border-box;
  margin-right: 1rem;
  width: 450px;
`

export const TotalWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-sizing: border-box;
  margin-left: 1rem;
  width: 450px;
`

export const Input = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: space-between;
  align-items: baseline;
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    > input {
      margin-right: 1rem;
    }
  }
`
export const Warning = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: red;
  color: white;
`

export const TotalCard = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 1px 1px grey;
  padding: 0.5rem;
  display: flex;
  > .image-card {
    display: flex;
    position: relative;
    height: 150px;
    width: 125px;
    padding: 1rem;
    > img {
      position: absolute;
      height: 140px;
    }
    > .price {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: gold;
      padding: 1rem;
      border: 1px solid black;
      border-radius: 100%;
      box-shadow: 1px 1px grey;
    }
  }
  > .details {
    > h4 {
      padding: 0;
      margin: 0.5rem;
    }
    > ol {
      margin: 0;
    }
  }
`
