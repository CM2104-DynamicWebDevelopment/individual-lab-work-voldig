Functionality Development:

Through rigorous research done on various different sources, the website's core structure will rely heavily on Auroras.live's API for tracking Aurora information. The main reason we decided to use this one in specific is because for one, the implementation of an Aurora tracker is far too complicated as it requires both sophisticated hardware and software to analyse weather behaviour. Another reason is due to the large majority of sites which do have weather APIs fail to provide details for auroras (TheWeatherChannel, NASA public APIs) making them irrelevant for helping our site's goal. 

For the main design structure we will use bootstrap to create a template and work it up to suit the website. We'll space the navigation up at the top (separate from the main content) and have any command features embedded underneath one plain rectrangle in a <section> tag which will include information for the aurora. This is to help with user navigation and to make the website simple in that it does its purpose without bombarding the user with any other unnecessary information. Generally, we're aiming for a minimalist design that has an intuitive navigation through the website and doesn't create any problems for the user.

The data we receive from a query feed will be translated to the user with images to locations, probability and intensity of aurora within the main body of the page as indicated above. We intend to be transparent with the user as to how we use any of their sensitive information as we will be using location to identify auroras near their region and cache their data. 

Concluding, we are going to use most of the API's code to handle server requests, saving us time and resources.  
