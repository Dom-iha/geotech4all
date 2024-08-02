function Service({ params }: { params: { service: string } }) {
  const { service } = params;

  return (
    <div className='grid min-h-screen place-items-center'>{service}</div>
  );
}

export default Service;
