import { Wrap, Descr, LinkToSource, StyledYear } from './Description.styled';

export const Description = ({ painting }) => {
  return (
    <Wrap>
      <StyledYear>{painting.year}</StyledYear>
      <Descr>{painting.description}</Descr>
      <LinkToSource href={`${painting.source}`}> GO TO SOURCE </LinkToSource>
    </Wrap>
  );
};
