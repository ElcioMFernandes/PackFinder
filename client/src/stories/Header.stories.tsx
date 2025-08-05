import type { Meta, StoryObj } from "@storybook/react";
import {
  Header,
  HeaderTitle,
  HeaderContent,
  HeaderFooter,
} from "../components/Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Header Content",
  },
};

export const Complete: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
  render: (args) => (
    <Header
      {...args}
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
    >
      <div className="flex items-center gap-3">
        <img src="/images/logo.png" alt="PackFinder" className="w-8 h-8" />
        <div className="flex flex-col">
          <HeaderTitle>PackFinder.io</HeaderTitle>
          <span className="text-xs text-gray-500">
            Package tracking and notification
          </span>
        </div>
      </div>

      <HeaderContent className="flex-1 justify-center">
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Histórico
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Notificações
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContent>

      <HeaderFooter>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            U
          </div>
          <span className="text-gray-700">User</span>
        </div>
      </HeaderFooter>
    </Header>
  ),
};

export const WithTitle: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>Meu Título</HeaderTitle>
    </Header>
  ),
};

export const WithNavigation: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => (
    <Header {...args} className="flex items-center justify-between">
      <HeaderTitle>Logo</HeaderTitle>
      <HeaderContent>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContent>
    </Header>
  ),
};

export const WithUser: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => (
    <Header {...args} className="flex items-center justify-between">
      <HeaderTitle>App Name</HeaderTitle>
      <HeaderFooter>
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Bem-vindo, João!</span>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            J
          </div>
        </div>
      </HeaderFooter>
    </Header>
  ),
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>Header Pequeno</HeaderTitle>
    </Header>
  ),
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>Header Grande</HeaderTitle>
    </Header>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
  },
  render: (args) => (
    <Header {...args}>
      <HeaderTitle>Header Secundário</HeaderTitle>
    </Header>
  ),
};

export const Responsive: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => (
    <Header
      {...args}
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <HeaderTitle>ResponsiveApp</HeaderTitle>
      </div>

      <HeaderContent className="w-full md:w-auto">
        <nav className="w-full">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-600 hover:text-blue-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 text-gray-600 hover:text-blue-600"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </HeaderContent>

      <HeaderFooter className="w-full md:w-auto">
        <div className="flex items-center justify-between md:justify-end gap-2">
          <span className="text-sm text-gray-600">Admin User</span>
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
        </div>
      </HeaderFooter>
    </Header>
  ),
};
