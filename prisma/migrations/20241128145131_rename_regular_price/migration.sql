/*
  Warnings:

  - You are about to drop the column `reqularPrice` on the `room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `room` DROP COLUMN `reqularPrice`,
    ADD COLUMN `regularPrice` DOUBLE NULL DEFAULT 0;
