import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 95px;
  left: 80px;
  background: #ca95ff;
  color: var(--White-500);
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 12px;
  overflow: hidden;
  small {
    font-size: 0.925rem;
  }
  div {
    display: flex;
    align-items: center;
  }
  strong {
    display: block;
    margin-top: 5px;
    font-size: 1.35rem;
    font-weight: lighter;
    position: relative;
    top: -1.5px;
    margin-right: 6px;
  }
  i {
    width: 154px;
    height: 77px;
    position: absolute;
    border-radius: 50px;
    &.circle1 {
      left: 100px;
      top: -15px;
      background: rgba(255, 255, 255, 0.3);
      z-index: 2;
    }
    &.circle2 {
      background: #daaaff;
      transform: rotate(45deg);
      left: 81px;
      bottom: -50px;
      z-index: 1;
    }
    &.circle3 {
      top: -54px;
      left: 40px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      transform: rotate(-72.7deg);
      z-index: 3;
    }
  }
`;
