---
image: /images/uploads/untitled-design.png
title: How to run a PHP File
date: 2020-06-03T14:53:09.782Z
published: true
tags:
  - php
  - apache
  - server
canonical_url: true
description: "Developers coming from languages such as JavaScript, Python or
  Ruby tend to have issues when working on PHP projects. In this article, you
  will learn how to run a PHP script in 2minutes. "
---
Running developer environment for PHP is relatively easy. You need  to just figure out how to run Apache, PHP, and SQL. The more popular way of doing this is installing an all-in-one package like XAMPP or WAMPP or whatever makes you sleep well at night. 

#### INSTALL XAMPP

Xampp: [Download here](https://www.apachefriends.org/download.html)

Follow this tutorial, if you're not sure of what to do. [![Xampp tutorial](https://res.cloudinary.com/marcomontalbano/image/upload/v1591199419/video_to_markdown/images/youtube--h6DEDm7C37A-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=h6DEDm7C37A)

#### RUNNING THE PHP FILE

In this tutorial, i will be using a live project. Follow these steps:

##### Open xampp control panel

If you're using Windows, type "xampp" (without the quotes) in your windows search and you will find "xampp control panel" or you can check your taskbar.

![Xampp control panel](/images/uploads/xampp1.png "Xampp control panel")

Click on the **Start** button in Apache and MySQL. If you have no errors, it means your Server is now up and running.

Go to your browser and type **localhost.** You should get that Welcome page from Xampp.

![Xampp](/images/uploads/screencapture-localhost-dashboard-2020-06-03-16_39_44.png "Welcome to Xampp")

Now if you installed xampp properly, it should be on your computer's root folder (this could be Local Disk(C:) or Local Disk (whatever alphabet:) ).  Follow these steps:

* Open the xampp folder
* Open htdocs (here's  where you will keep your project folder). You can find the "Welcome to Xampp" web page by opening the dashboard folder and opening index.html. Apparently, to run your php projects, you have to place the **project folder in htdocs.**
* Copy your work folder and paste it in the htdocs folder. For instance, my work folder (has the PHP Script and all other gibberish) is HNG-Script and in the image below, you can find it in the htdocs folder.

  ![hng-script](/images/uploads/hng-script.png "My work folder")
* Finally, type **localhost/your work folder name/**. In my case, it is **localhost/hng-script/**. It might take sometime, just wait.

  ![Result](/images/uploads/xampp2.png "PHP PROJECT IS LIVE!!!")

That's how to setup a local server and run a PHP project on your  computer.



### SUMMARY

PHP is a very beautiful and the most used server side language today. In most PHP projects, for other developers ( JavaScript, Ruby, Python and so on)  to contribute, they need to setup the project on their machines. These are the steps in summary:

\- Install Xampp

\- Start Xampp control panel

\- Start Apache and MySQL

\- Copy work folder to C:\xampp\htdocs

\- Type localhost:/work-folder on your browser

Having issues? Check this [troubleshooting guide](https://premium.wpmudev.org/blog/troubleshooting-xampp/).