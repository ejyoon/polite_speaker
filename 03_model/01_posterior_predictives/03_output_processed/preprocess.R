library(tidyverse)
library(here)
library(jsonlite)
library(langcog)
library(ggthemes)
library(coda)
library(binom)


estimate_mode <- function(s) {
  d <- density(s)
  return(d$x[which.max(d$y)])
}
hdi_upper <- function(s){
  m <- HPDinterval(mcmc(s))
  return(m["var1","upper"])
}
hdi_lower <- function(s){
  m <- HPDinterval(mcmc(s))
  return(m["var1","lower"])
}
options("scipen"=10)   


bda_self5 <- fromJSON(here("model/bda/output/bda-s2_self5_allNorm_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self5_allNorm_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self5_allNorm_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self5_allNorm_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "Full")


bda_self6 <- fromJSON(here("model/bda/output/bda-s2_self6_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self6_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self6_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self6_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "InfPres")

bda_actual2 <- fromJSON(here("model/bda/output/bda-s2_actual2_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_actual2_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_actual2_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_actual2_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "InfSoc")

bda_self7 <- fromJSON(here("model/bda/output/bda-s2_self7_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self7_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self7_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/bda/output/bda-s2_self7_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "SocPres")

bda_selfPres <- fromJSON(here("model/model_fitting/output/bda-s2_selfPres_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_selfPres_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_selfPres_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_selfPres_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "pres")

bda_trueInf <- fromJSON(here("model/model_fitting/output/bda-s2_trueInf_3heart_paramAdj-mcmc80000_burn40000_chain1.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
  mutate(chain = "1") %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_trueInf_3heart_paramAdj-mcmc80000_burn40000_chain2.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "2")) %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_trueInf_3heart_paramAdj-mcmc80000_burn40000_chain3.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "3")) %>%
  rbind(., fromJSON(here("model/model_fitting/output/bda-s2_trueInf_3heart_paramAdj-mcmc80000_burn40000_chain4.json"), flatten = TRUE, simplifyDataFrame = TRUE)$support %>%
          mutate(chain = "4")) %>%
  mutate(model = "inf")

bda_trueSoc <- read.csv(here("model/model_fitting/output/bda-s2_trueSoc_3heart_paramAdj-mcmc80000_burn40000_lag0_chain1.csv")) %>%
  mutate(chain = "1") %>%
  rbind(., read.csv(here("model/model_fitting/output/bda-s2_trueSoc_3heart_paramAdj-mcmc80000_burn40000_lag0_chain2.csv")) %>%
          mutate(chain = "2")) %>%
  rbind(., read.csv(here("model/model_fitting/output/bda-s2_trueSoc_3heart_paramAdj-mcmc80000_burn40000_lag0_chain2.csv")) %>%
          mutate(chain = "3")) %>%
  rbind(., read.csv(here("model/model_fitting/output/bda-s2_trueSoc_3heart_paramAdj-mcmc80000_burn40000_lag0_chain2.csv")) %>%
          mutate(chain = "4")) %>%
  
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueInf, file=here("model/model_fitting/output/polite_bda-inf.RData"))
save(bda_trueSoc, file=here("model/model_fitting/output/polite_bda-inf.RData"))

