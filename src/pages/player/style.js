import styled from "styled-components";

export const SongDetailWrapper = styled.div`
  .content  {
    display: flex;
    width: 982px;
    background: url(${require('@/assets/img/wrap-bg.png')}) repeat-y center 0;
    /* height: 1000px; */
  }
`

export const SongLeft = styled.div`
  width: 720px;
`

export const SongRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`