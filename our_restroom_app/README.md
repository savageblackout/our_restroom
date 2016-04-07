#Our Restroom
![Our Restroom logo](https://i.imgur.com/9DbFG9o.png)

##Some of the most insidious and common reasons for harmful policies are misinformation and ignorance to the experience of those personally affected.


#APPROACH

In the wake of several state-wide laws that have recently been passed barring 
LGBTQ nondiscrimination ordinances:

> The measure revokes local gay and trans nondiscrimination ordinances throughout the state, 
> effectively legalizing anti-LGBTQ discrimination, and forbids trans people from using the 
> bathroom that aligns with their gender identity. That includes trans public school students, 
> many of whom will now, in effect, be barred from using the bathroom at school.  
> 
> -Mark Joseph Stern of _The Slate_

Our Restroom is an application that provides businesses that have single-stall, gendered restrooms
the necessary information to change their policy regarding gendered bathrooms. Patrons may not feel comfortable or equipped to approach business managers or owners, so we take the responsibility for getting in touch and informing them of the many reasons for unisex bathrooms. 

Policies like the one recently passed in North Carolina not only affect gender-nonconforming
people, but also parents of children of the opposite gender: what happens to children who
need help in the bathroom? What about caretakes of people with disabilities? Elderly people who 
assistance in the restroom? 
These are all scenarios to consider when local businesses create spaces that will cater
to and make all of their patrons comfortable.

##Kroger has the right idea:  

![Kroger posts a note on their bathroom explaining why they utilize non-gendered single-stall restrooms](https://40.media.tumblr.com/468e9567a4801b118d52cfa93d05cc34/tumblr_o4t2k959eS1qcqoybo1_500.jpg)

The goal is to create a user-generated database that will store business information
and reach out to these business via postal mail, email, and potentially via social 
media such as Twitter.

#USE

Arriving at the welcome page,  

![welcome page](https://i.imgur.com/5aSjvz7.png) 


you will have the option to read about the site/project,  

![About page](https://i.imgur.com/LoqpxuS.png)

fill out a form with business information that you would like to be educated about
the benefits of non-gender-specific single-stall restrooms,  

![form page](https://i.imgur.com/erIu9DQ.png) 

see a list of businesses that are in the site's database,   

![list of Businesses page](https://i.imgur.com/P3WxZlZ.png)


and search this list of businesses in the site's database.  

![search businesses](https://i.imgur.com/kv5EySr.png)

In addition, if you see a business that you would like to add to the database by
filling out the name and address on the Educate a Business page already exists 
in the database, you can click the "+" next to the business to give it an "up vote".
Rather than flood the site's database with potential repeats of the same business, 
with the click of a button you can piggyback on a business that has already been entered in the 
database!



#MODELS
  
![user and biz models for Our Restroom](https://i.imgur.com/fSD2Dt7.png)

#TECHNOLOGIES USED  
- CSS/HTML/JavaScript: for basic structure, style, and templating  
- Angular: for framework   
- Express, Node.js, and mongoDB: for application functionality  
- [Wexgen](https://github.com/h4w5/wexgen): for generating a WDI-specific application structure  
- [Bootstrap](http://getbootstrap.com/): for adding snazzy style  

##Check out User Stories on [Trello](https://trello.com/b/NClftgba/our-restroom)!

#API DOCUMENTATION

**Our API currently returns JSON.** 

##Actions: `/`

##GET: `api/businesses`  
gets the index of businesses  

- `name: Type: String`
- `address1: Type: String`
- `address2: Type: String`
- `email: Type: String`
- `twitterHandle: Type: String`
- `upVotes: Type: Number`
- `updatedPolicy: Type: Text`

##POST: `api/businesses`  
post a new business to the database

##PUT `api/businesses/:id`
updates the "up vote" parameter of the business with one vote per click, 
per business, per user

##GET: `api/searches`  
gets the index of businesses returned as a result of a user search  



#ON THE HORIZON

Stay tuned for updates! If you would like to check back and see that a business
that you have added to the database has altered their restroom policy, we will be updating 
our database on a regular basis. The admin of the site will have the capability
of updating businesses on the database. Users that have signed up 
to receive updates will be sent this information via email.

#FOLLOW US ON
- [Twitter](https://twitter.com/ourrestroom)
- [Instagram](http://instagram.com/ourrestroom)
- [Facebook](https://www.facebook.com/OURrestroom)


#RESOURCES
- [Everyone Is Gay](http://everyoneisgay.com/)  
- [The Parents Project](http://theparentsproject.com/)


