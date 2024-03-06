import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    // ChevronDownIcon,
} from '@chakra-ui/react'

export default function Header() {
    return (
        <div className=" flex gap-10 p-5 px-20 justify-between">
            <div>Logo</div>
            <div>Shop</div>
            <div>For KinderGarten &#11167;</div>
            <div>For High School &#11167;</div>
            <div>For Collage &#11167;</div>
            <div>Courses &#11167;</div>
            <div>Mentors</div>
            <div>Cart</div>
            <div>My Account</div>
        </div>
    )
}
