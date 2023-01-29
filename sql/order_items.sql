/*
 Navicat Premium Data Transfer

 Source Server         : akx2
 Source Server Type    : PostgreSQL
 Source Server Version : 140006 (140006)
 Source Host           : localhost:5432
 Source Catalog        : akx_tests
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140006 (140006)
 File Encoding         : 65001

 Date: 29/01/2023 12:49:30
*/


-- ----------------------------
-- Table structure for order_items
-- ----------------------------
DROP TABLE IF EXISTS "public"."order_items";
CREATE TABLE "public"."order_items" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "symbol" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "chain_id" int4,
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "is_base" bool NOT NULL DEFAULT true
)
;
ALTER TABLE "public"."order_items" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table order_items
-- ----------------------------
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_pkey" PRIMARY KEY ("id");


