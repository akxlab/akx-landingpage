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

 Date: 29/01/2023 12:37:59
*/


-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS "public"."orders";
CREATE TABLE "public"."orders" (
  "order_id" uuid NOT NULL,
  "order_item" int8 NOT NULL,
  "beneficiary" varchar(42) COLLATE "pg_catalog"."default" NOT NULL,
  "item_qty" float4 NOT NULL,
  "item_price" float4 NOT NULL,
  "currency_type" varchar(40) COLLATE "pg_catalog"."default" NOT NULL,
  "base_item_price" float4 NOT NULL,
  "base_currency"  varchar(40) COLLATE "pg_catalog"."default" NOT NULL,
  "order_fee_type" varchar(30) COLLATE "pg_catalog"."default" NOT NULL DEFAULT ''::character varying,
  "order_fee_amt" float4 NOT NULL DEFAULT 0,
  "status" varchar(30) COLLATE "pg_catalog"."default" NOT NULL DEFAULT ''::character varying
)
;
ALTER TABLE "public"."orders" OWNER TO "postgres";
COMMENT ON COLUMN "public"."orders"."order_id" IS 'Order id linked on frontend session';

-- ----------------------------
-- Primary Key structure for table orders
-- ----------------------------
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id");
