

import Image from "next/image";
import React from 'react';


const Loading = () => {
  return (
    <div className="loading">
      loading ? <Image src="/spinner.svg" width={200} height={200} alt="loading" />
    </div>
  );
};

export default Loading;
