# s3-assets-sync

Sync asset files (CSS, JS, images) with Amazon S3 and does the following:

  * Set the HTTP headers (Content-Type and Cache-Control).
  * gzip CSS and JS files and set Content-Encoding header for those.

## Requirements

  * [Node.js](https://nodejs.org)

## Installation

Make sure you have `gulp` installed. If not, run this:

    $ npm install --global gulp

Clone this repository:

    $ git clone https://github.com/lovewithfood/s3-assets-sync.git

Enter directory:

    $ cd s3-assets-sync

Install dependencies:

    $ npm install

Copy `aws.json.example` to `aws.json` and fill in your S3 key and bucket
details on `aws.json`.

    $ cp aws.json.example aws.json

Create `assets` directory and put the files you want to upload inside.

    $ mkdir assets

## Usage

Sync to S3:

    $ gulp sync
