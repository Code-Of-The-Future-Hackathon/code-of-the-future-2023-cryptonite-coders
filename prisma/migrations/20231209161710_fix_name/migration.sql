/*
  Warnings:

  - The primary key for the `imagesonorganisationposts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `organisationId` on the `imagesonorganisationposts` table. All the data in the column will be lost.
  - Added the required column `organisationPostId` to the `ImagesOnOrganisationPosts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `imagesonorganisationposts` DROP FOREIGN KEY `ImagesOnOrganisationPosts_organisationId_fkey`;

-- AlterTable
ALTER TABLE `imagesonorganisationposts` DROP PRIMARY KEY,
    DROP COLUMN `organisationId`,
    ADD COLUMN `organisationPostId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`imageId`, `organisationPostId`);

-- AddForeignKey
ALTER TABLE `ImagesOnOrganisationPosts` ADD CONSTRAINT `ImagesOnOrganisationPosts_organisationPostId_fkey` FOREIGN KEY (`organisationPostId`) REFERENCES `organisation_posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
