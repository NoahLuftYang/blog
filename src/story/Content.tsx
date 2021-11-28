import { Code, Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  content: MDXRemoteSerializeResult;
}

const components: Record<string, ReactNode> = {
  h2: (props: ComponentProps<typeof Heading>) => <Heading as="h2" fontSize="2xl" {...props} />,
  p: (props: ComponentProps<typeof Text>) => <Text as="p" {...props} />,
  ul: UnorderedList,
  li: ListItem,
  inlineCode: (props: ComponentProps<typeof Code>) => (
    <Code colorScheme="blackAlpha" variant="solid" {...props} />
  ),
};

export const Content = ({ content, ...props }: Props) => {
  return (
    <VStack as="section" spacing={8} {...props}>
      <MDXRemote components={components} {...content} />
    </VStack>
  );
};
