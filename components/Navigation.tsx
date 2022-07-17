import styled from "@emotion/styled";

const StyleContainer = styled.div`
  width: 100%;
`;
const List = styled.ul`
  width: max-content;

  list-style: none;
  background-color: green;
  margin: 0;
  padding: 0;
  overflow: scroll;
`;
const ListItem = styled.li``;

function Navigation() {
  const menusitems = [
    "홈",
    "베스트",
    "신상백서",
    "건강관리",
    "이벤트",
    "아울렛",
    "10%+10%적립",
    "100원딜",
  ];
  return (
    <StyleContainer>
      <List style={{ display: "flex" }}>
        {menusitems.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </StyleContainer>
  );
}

export default Navigation;
