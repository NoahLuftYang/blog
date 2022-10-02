import { Badge, HStack } from '@stillmine/react-components';

export function Interests() {
  return (
    <section>
      <h2>Interests</h2>
      <HStack spacing={8}>
        <Badge>Frontend</Badge>
        <Badge>Clean Code</Badge>
        <Badge>TypeScript</Badge>
        <Badge>React</Badge>
        <Badge>Node.js</Badge>
        <Badge>Automation</Badge>
        <Badge>Virtualization</Badge>
      </HStack>
    </section>
  );
}
