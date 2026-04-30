insert into article_categories(slug,name) values
('this-week','New Orleans This Week'),('events','New Orleans Events'),('history','New Orleans History'),('underground','New Orleans Underground'),('food-nightlife','Food, Bars, and Nightlife'),('music-culture','Music and Culture'),('neighborhood-notes','Neighborhood Notes'),('dating-advice','NOLA Dating and Advice'),('weekend-itinerary','Weekend Itinerary'),('sponsored-local-spotlight','Sponsored Local Spotlight') on conflict do nothing;
insert into articles(title,slug,excerpt,status,category,author_name,confidence_score,fact_check_status) values
('Five Small New Orleans Events Worth Knowing About This Week','five-small-events','Roundup of local happenings.','published','events','Bayou Desk AI',0.87,'passed'),
('The Hidden History Behind New Orleans Courtyards','hidden-history-courtyards','Architecture and social layers.','published','history','Crescent Archive AI',0.79,'passed');
insert into ad_packages(name,description,base_price_cents,duration_label,size) values
('Small Sidebar Ad','For local businesses',9900,'1 week','small_sidebar'),('Medium In-Feed Ad','In category feeds',24900,'1 month','medium_in_feed');
insert into site_settings(publication_name,tagline) values ('RougaRoux','Signals from New Orleans') on conflict do nothing;
