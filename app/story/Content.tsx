import { Code, Heading, ListItem, Text, UnorderedList, VStack } from '@stillmine/react-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ComponentProps } from 'react';

interface Props {
  content: MDXRemoteSerializeResult;
}

export function Content({ content, ...props }: Props) {
  return (
    <VStack as="section" spacing={8} {...props}>
      <MDXRemote
        components={{
          h2: function H2(props: ComponentProps<typeof Heading>) {
            return <Heading as="h2" fontSize="2xl" {...props} />;
          },
          inlineCode: function InlineCode(props: ComponentProps<typeof Code>) {
            return <Code colorScheme="blackAlpha" variant="solid" {...props} />;
          },
          li: ListItem,
          p: function Paragraph(props: ComponentProps<typeof Text>) {
            return <Text as="p" {...props} />;
          } as any,
          ul: UnorderedList,
        }}
        {...content}
      />
    </VStack>
  );
}
