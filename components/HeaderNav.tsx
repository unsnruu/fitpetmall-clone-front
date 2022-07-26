import Link from "next/link";
import styled from "@emotion/styled";

//todo
//media query 적용하기
const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: 1rem;
`;
const StyledList = styled.ul`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const StyledAnchor = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.deepGray};
  margin: 0.5rem;
  cursor: pointer;
`;
const SmogDecoration = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: -10px 0px 10px inset white;
  z-index: 1;
`;

interface NavItem {
  text: string;
  url: string;
}

function HeaderNav() {
  const navItems: NavItem[] = [
    { text: "홈", url: "/" },
    { text: "베스트", url: "/home/bestseller" },
    { text: "신상백서", url: "/home/events" },
    { text: "건강관리", url: "/home/category" },
    { text: "이벤트", url: "/home/events" },
    { text: "아울렛", url: "/home/events" },
    { text: "10%+10%적립", url: "/home/events" },
    { text: "100원딜", url: "/home/events" },
  ];

  return (
    <StyledContainer>
      <StyledList>
        {navItems.map(({ text, url }) => (
          <Link key={text} href={url}>
            <StyledAnchor>{text}</StyledAnchor>
          </Link>
        ))}
      </StyledList>
      <SmogDecoration />
    </StyledContainer>
  );
}

export default HeaderNav;
