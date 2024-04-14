import { MenuContainer, TitleBox, LinkBox, Group, LinkBoxItem } from "./styles"
import Link from "../Link"
import links from "../../data/side"

const Menu = () => {

    return (
            
        <MenuContainer>
            {links.map((link, index) => (
                <Group key={index}>
                    <TitleBox>
                        <h4>{link.title}</h4>
                    </TitleBox>
                    <LinkBox>
                        {link.links.map((link, index) => (
                            <LinkBoxItem key={index}>
                                <Link to={link.url} $color="#03045e">{link.title}</Link>
                            </LinkBoxItem>
                        ))}
                    </LinkBox>
                </Group>
            ))}
        </MenuContainer>

    )

}

export default Menu