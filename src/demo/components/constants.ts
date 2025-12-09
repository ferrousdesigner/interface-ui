import { Button } from "../../components/Button/Button";
import Pane from "../../components/Pane/Pane";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Radio } from "../../components/Radio/Radio";
import { Switch } from "../../components/Switch/Switch";
import { Select } from "../../components/Select/Select";
import { Slider } from "../../components/Slider/Slider";
import { Card } from "../../components/Card/Card";
import { Badge } from "../../components/Badge/Badge";
import { Chip } from "../../components/Chip/Chip";
import { Tag } from "../../components/Tag/Tag";
import { Avatar } from "../../components/Avatar/Avatar";
import { Alert } from "../../components/Alert/Alert";
import { Progress } from "../../components/Progress/Progress";
import { Table } from "../../components/Table/Table";
import { Tabs } from "../../components/Tabs/Tabs";
import { Accordion } from "../../components/Accordion/Accordion";
import { Menu } from "../../components/Menu/Menu";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Pagination } from "../../components/Pagination/Pagination";
import { Modal } from "../../components/Modal/Modal";
import { Drawer } from "../../components/Drawer/Drawer";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { IconButton } from "../../components/IconButton/IconButton";
import { List } from "../../components/List/List";
import React from "react";

enum StageView {
  Enlarge = 'enlarge',
  Normal = 'normal',
}

export const components = [{
  name: 'Accordion',
  icon: 'accordion',
  path: '/accordion',
  component: Accordion,
  props: {
    items: [
      { 
        key: '1', 
        icon: <span>A</span>,
        title: 'Accent',
        subtitle: 'A smooth accordion for your sliding needs',
        children: 'An expandable and collapsible content panel that allows users to hide and reveal sections of information.'
      },
      { 
        key: '2', 
        icon: <span>B</span>,
        title: 'Section 2',
        subtitle: 'Another accordion section',
        children: 'Content for section 2'
      },
      { 
        key: '3', 
        icon: <span>C</span>,
        title: 'Section 3',
        subtitle: 'Third accordion section',
        children: 'Content for section 3'
      },
    ],
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Alert',
  icon: 'alert',
  path: '/alert',
  component: Alert,
  props: {
    variant: 'info',
    title: 'Alert Title',
    children: 'This is an alert message',
    dismissible: true,
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Avatar',
  icon: 'avatar', 
  path: '/avatar',
  component: Avatar,
  props: {
    initials: 'JD',
    size: 'large',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Badge',
  icon: 'badge',
  path: '/badge',
  component: Badge,
  props: {
    children: 'Badge',
    variant: 'primary',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Button',
  icon: 'button',
  path: '/button',
  component: Button,
  props: { children: 'Button 22' },
  stageProps: {
    view: StageView?.Enlarge
  },
}, {
  name: 'Pane',
  icon: 'pane',
  path: '/pane',
  component: Pane,
  props: { children: 'Pane' },
  stageProps: {
    view: StageView?.Normal
  },
}, {
  name: 'Card',
  icon: 'card',
  path: '/card',
  component: Card,
  props: {
    header: 'Beautiful Landscape',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    imageAlt: 'Mountain landscape',
    children: 'This is a stunning mountain landscape with snow-capped peaks and a serene lake reflecting the beauty of nature. The card component now supports images and provides a more engaging visual experience.',
    footer: 'Photo by Unsplash',
    hoverable: true,
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Checkbox',
  icon: 'checkbox',
  path: '/checkbox',
  component: Checkbox,
  props: {
    label: 'Checkbox Label',
    defaultChecked: false,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Chip',
  icon: 'chip',
  path: '/chip',
  component: Chip,
  props: {
    children: 'Chip',
    removable: true,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Drawer',
  icon: 'drawer',
  path: '/drawer',
  component: Drawer,
  props: {
    open: false,
    title: 'Drawer Title',
    children: 'Drawer content',
    placement: 'right',
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Dropdown',
  icon: 'dropdown',
  path: '/dropdown',
  component: Dropdown,
  props: {
    trigger: 'Click me',
    items: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
    ],
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'IconButton',
  icon: 'icon-button',
  path: '/icon-button',
  component: IconButton,
  props: {
    icon: '⚙',
    'aria-label': 'Settings',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Input',
  icon: 'input',
  path: '/input',
  component: Input,
  props: {
    label: 'Input Label',
    placeholder: 'Enter text...',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'List',
  icon: 'list',
  path: '/list',
  component: List,
  props: {
    items: [
      { key: '1', content: 'List Item 1' },
      { key: '2', content: 'List Item 2' },
      { key: '3', content: 'List Item 3' },
    ],
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Menu',
  icon: 'menu',
  path: '/menu',
  component: Menu,
  props: {
    items: [
      { key: '1', label: 'Menu Item 1' },
      { key: '2', label: 'Menu Item 2' },
      { key: '3', label: 'Menu Item 3' },
    ],
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Modal',
  icon: 'modal',
  path: '/modal',
  component: Modal,
  props: {
    open: false,
    title: 'Modal Title',
    children: 'Modal content',
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Pagination',
  icon: 'pagination',
  path: '/pagination',
  component: Pagination,
  props: {
    current: 1,
    total: 10,
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Progress',
  icon: 'progress',
  path: '/progress',
  component: Progress,
  props: {
    value: 60,
    showValue: true,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Radio',
  icon: 'radio',
  path: '/radio',
  component: Radio,
  props: {
    label: 'Radio Option',
    name: 'radio-group',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Select',
  icon: 'select',
  path: '/select',
  component: Select,
  props: {
    label: 'Select',
    placeholder: 'Choose an option...',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Slider',
  icon: 'slider',
  path: '/slider',
  component: Slider,
  props: {
    label: 'Slider',
    value: 50,
    showValue: true,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Switch',
  icon: 'switch',
  path: '/switch',
  component: Switch,
  props: {
    label: 'Switch Label',
    defaultChecked: false,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Table',
  icon: 'table',
  path: '/table',
  component: Table,
  props: {
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'age', header: 'Age' },
      { key: 'city', header: 'City' },
    ],
    data: [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'London' },
      { name: 'Bob', age: 35, city: 'Paris' },
    ],
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Tabs',
  icon: 'tabs',
  path: '/tabs',
  component: Tabs,
  props: {
    items: [
      { key: '1', label: 'Tab 1', content: 'Content 1' },
      { key: '2', label: 'Tab 2', content: 'Content 2' },
      { key: '3', label: 'Tab 3', content: 'Content 3' },
    ],
  },
  stageProps: {
    view: StageView.Normal
  },
}, {
  name: 'Tag',
  icon: 'tag',
  path: '/tag',
  component: Tag,
  props: {
    children: 'Tag',
    variant: 'primary',
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Textarea',
  icon: 'textarea',
  path: '/textarea',
  component: Textarea,
  props: {
    label: 'Textarea Label',
    placeholder: 'Enter text...',
    rows: 4,
  },
  stageProps: {
    view: StageView.Enlarge
  },
}, {
  name: 'Tooltip',
  icon: 'tooltip',
  path: '/tooltip',
  component: Tooltip,
  props: {
    title: 'Tooltip text',
    children: React.createElement('span', null, 'Hover me'),
  },
  stageProps: {
    view: StageView.Enlarge
  },
}];
