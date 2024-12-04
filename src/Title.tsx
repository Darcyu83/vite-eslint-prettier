interface IProps {
  message: string;
}

function Title({ message }: IProps) {
  return (
    <div style={{}}>
      <h1>{message}</h1>
    </div>
  );
}

export default Title;
