# NextJS Auth0

I created this using NextJS as a test application to showcase a built in video file uploader for the final project at the School of Code.\
<br/>
[View Demo](https://nextjs-vimeouploader.vercel.app/)\
<br/>

## Details

The final project at the School of Code was a video platform which hosted lectures and the meta data associated with them. I built this video file uploader to improve usability of the site, preventing users from having to navigate away from the page to upload content to the platform.\
It was built using NextJS and utilises the vimeo api on the frontend to send content to the associated account. In this example the filename can also be set. I created a simple uploader status using hooks which monitors the upload process and resets after it has finished.

<br/>

## Built With

- HTML
- CSS
- Javascript
- NextJS
- vimeo api
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.
An auth0 account.
A .env.local file in the root folder
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/nextjs_vimeouploader.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a vimeo account and access it from https://developer.vimeo.com/
4. You will need to create a new application here and request upload access. The vimeo documentation can explan this better than I can.
5. Create a .env.local file in the root directory with the below entries. Fill in the details from you vimeo account once your upload access has been approved.
   ```sh
   NEXT_PUBLIC_VIMEO_CLIENT_ID=
   NEXT_PUBLIC_VIMEO_CLIENT_SECRET=
   NEXT_PUBLIC_VIMEO_ACCESS_TOKEN=
   ```
6. Start the application
   ```sh
   npm run dev
   ```
   <br/>

## Usage

After opening the page, select a file and click upload video. The status will change depending on the state of the upload.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
