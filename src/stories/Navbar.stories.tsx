import { Meta, StoryObj } from "@storybook/react"
import Navbar from "../../lib/components/Navbar"

const meta : Meta<typeof Navbar> = {
    component : Navbar,
}

export default meta;

type Story = StoryObj<typeof Navbar>;


const primaryNavLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
    padding: "8px",
    display: "inline-block",
  };

  const secondaryNavLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "red",
    fontWeight: "bold",
    padding: "8px",
    display: "inline-block",
  };

  const tertiaryNavLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "green",
    fontWeight: "bold",
    padding: "8px",
    display: "inline-block",
  };

  const navbarStyle: React.CSSProperties = {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    listStyle : "none",
  };


export const Primary : Story = {
    render : () => <Navbar navLinkStyleAsInput={primaryNavLinkStyle} navbarStyleAsInput={navbarStyle} />
}

export const Secondary : Story = {
    render : () => <Navbar navLinkStyleAsInput={secondaryNavLinkStyle} navbarStyleAsInput={navbarStyle}/>
}

export const Tertiary : Story = {
    render : () => <Navbar navLinkStyleAsInput={tertiaryNavLinkStyle} navbarStyleAsInput={navbarStyle} />
}