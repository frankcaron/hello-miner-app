CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
  VALUES ('Frank', 'frank@frankcaron.com');

CREATE SCHEMA salesforce;

CREATE TABLE salesforce.site__c (
    site_city__c character varying(255),
    site_country__c character varying(255),
    site_state__c character varying(255),
    name character varying(80),
    lastmodifieddate timestamp without time zone,
    ownerid character varying(18),
    isdeleted boolean,
    systemmodstamp timestamp without time zone,
    site_location__longitude__s double precision,
    createddate timestamp without time zone,
    green_initiatives__c character varying(4099),
    site_location__latitude__s double precision,
    createdbyid character varying(18),
    site_description__c text,
    sfid character varying(18),
    id integer NOT NULL,
    _hc_lastop character varying(32),
    _hc_err text
);

INSERT INTO salesforce.site__c (site_city__c, site_country__c, site_state__c, green_initiatives__c, site_location__latitude__s, site_location__longitude__s, site_description__c, name, id)
  VALUES ('Toronto', 'Canada', 'Ontario', 'Zero carbon footprint, tree recycling', '10.11', '-11.11', 'This is my site', 'Site A', 123456);