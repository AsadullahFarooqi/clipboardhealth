# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
I'm assuming one agent can be in multiple facilities and one facilty can have multiple agents. So it is related to role based access problem.
So we can have a bridge table where each agent will be linked to all the facil
1. Add an aditional culmn for agents table for custom-id
   1.1. If one agent can have relation to mulitple facilities and each facility can have relation with multiple agents then we will have to add Add an additional bridge table where each agent will be linked to all the facilities and have an extra column with for the custom id
   ### time estimate
   1-2 days
2. Add the agent's custom ids to the table, that can be done manually but for the future we will need to have APIs + UI so users/facility-admin can add or update the data
   ### time estimate
   - 0.25 day for adding the data it depends on how big the agent table is
   - 2 days for updating the UI
3. Update the `getShiftsByFacility` function so it returns an extra coulmn with custom-id from the bridge table. that can also be done using ORM
   ### time estimate
   - 0.5 to 0.25 day
4. Update the `generateReport` so it have the additional custom id
    ### time estimate
   - 0.5 to 0.25 day
