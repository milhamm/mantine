import { createStyles } from '@mantine/styles';

export interface TextAreaStylesParams {
  autosize: boolean;
}

export default createStyles((theme, { autosize }: TextAreaStylesParams) => ({
  input: {
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    overflow: autosize ? 'hidden' : 'auto',
  },
}));
