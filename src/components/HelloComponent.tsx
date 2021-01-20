type HelloComponentProps = {
  message: string
}

function HelloComponent({message}: HelloComponentProps) {
  return (
    <h1>Hello {message}</h1>
  );
}

export default HelloComponent;
