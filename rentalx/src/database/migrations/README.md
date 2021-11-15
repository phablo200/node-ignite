# To execute migrations
Change the port for 5433 in the file ormconfig,  before to execute, after remember to put 5432
# Create migrations
yarn typeorm migration create -n :name:
# Execute migrations
yarn typeorm migration:run

# Show all migrations:
yarn typeorm migration:show
