import { DefaultLayout as Layout } from './default';
import type { StoryObj, Meta } from '@storybook/react';

export default {
  component: Layout,
  title: 'Components/Layout',
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    testId: {
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    t: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    testId: 'layout',
  },
  render: (args) => (
    <div className="h-screen">
      <Layout {...args}>Content</Layout>
    </div>
  ),
};
