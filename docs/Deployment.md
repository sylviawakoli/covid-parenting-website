# How to Deploy Covid Parenting Website

## Overview

The Covid Parenting website is available at http://34.120.48.229/
The DNS for this is currently on Wix.
This URL points to a Google Cloud Load Balancer in the "Covid Parenting Websites" GCloud project.
This load balancer then serves the website from one of two backend storage buckets.
We upload to bucket 2 that isn't live, then switch the load balancer to bucket 2 then check that the website is working. Finally we sync bucket 1 with the changes live on the new website, and switch the load balancer so that bucket 1 is the live website again.

## How to release a new app website to production

1. First make sure you have reviewed the IDEMS security policy to make sure you are not introducing any new vulnerabilities.
2. Download the Google Cloud SDK and check you can run the `gsutil` command
3. Go to the Google Cloud Load Balancer (covid-website-lb1) in the "Covid Parenting Websites" GCloud project.
4. Check that the backend under host rules is pointing to covid-website-backend-bucket1
5. Run `npm run deploy-to-2` to build the website files, and upload them to covid-website-storage2 bucket. If this command fails during the upload, you can rerun the command and it will continue the upload from where it stopped.
6. Switch the load balancer to point to covid-website-backend-bucket2 by adding that bucket in the backends section, then changing the host rule to send all requests to covid-website-backend-bucket2.
7. Wait 5 minutes, clear your cache and check that the website is working
8. If the website is not working switch the load balancer back to pointing to covid-website-backend-bucket1, and investigate why before repeating steps 5 - 7.
9. Once the website is working when pointing to covid-website-backend-bucket2, run `npm run deploy-from-2-to-1` to upload covid-website-storage1 with the contents of covid-website-storage2
10. Switch the load balancer to point to covid-website-backend-bucket1 by adding that bucket in the backends section, then changing the host rule to send all requests to covid-website-backend-bucket1.
11. Wait at least 5 minutes, clear your cache and check that the website is working
12. If the website is not working switch the load balancer back to pointing to covid-website-backend-bucket2, and investigate why before repeating previous steps.
13. If the website is working run `npm run deploy-cleanup-1` to delete files in covid-website-storage1 that are no longer needed.
14. You are done!