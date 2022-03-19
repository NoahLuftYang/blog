import { Code, Heading, ListItem, Text, UnorderedList, VStack } from '@stillmine/react-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  content: MDXRemoteSerializeResult;
}

const components: Record<string, ReactNode> = {
  h2: function H2(props: ComponentProps<typeof Heading>) {
    return <Heading as="h2" fontSize="2xl" {...props} />;
  },
  inlineCode: function InlineCode(props: ComponentProps<typeof Code>) {
    return <Code colorScheme="blackAlpha" variant="solid" {...props} />;
  },
  li: ListItem,
  p: function Paragraph(props: ComponentProps<typeof Text>) {
    return <Text as="p" {...props} />;
  },
  ul: UnorderedList,
};

export function Content({ content, ...props }: Props) {
  return (
    <VStack as="section" spacing={8} {...props}>
      <MDXRemote components={components} {...content} />
    </VStack>
  );
}
