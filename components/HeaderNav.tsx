import Link from "next/link";
import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 6px;
  overflow: auto;
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
  box-shadow: -10px 0px 10px 5px inset white;
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
    <Container>
      <ScrollContainer>
        <div
          style={{
            width: "max-content",
            height: "45px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {navItems.map(({ text, url }) => (
            <Link href={url} key={text}>
              <StyledAnchor>{text}</StyledAnchor>
            </Link>
          ))}
        </div>
      </ScrollContainer>
      <SmogDecoration />
    </Container>
  );
}

export default HeaderNav;
