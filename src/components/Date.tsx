import { Flex } from '@product/react-components';
import { OmitProps } from '@stillmine/types';
import { format, parseISO } from 'date-fns';

interface Props extends OmitProps<typeof Flex, 'align'> {
  isoDate: string;
}

export const Date = ({ isoDate, ...props }: Props) => {
  const date = parseISO(isoDate);

  return (
    <Flex align="center" as="time" dateTime={isoDate} {...props}>
      {format(date, 'LLLL  d, yyyy')}
    </Flex>
  );
};
